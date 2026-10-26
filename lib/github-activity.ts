import 'server-only';

export type ContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
};

export type ContributionWeek = {
  contributionDays: ContributionDay[];
};

export type GitHubActivity = {
  totalContributions: number;
  weeks: ContributionWeek[];
};

type GraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: GitHubActivity;
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const query = `
  query ContributionCalendar($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function getGitHubActivity(): Promise<GitHubActivity | null> {
  const token = process.env.GITHUB_ACTIVITY_TOKEN;

  // The GitHub GraphQL API requires authentication, even for public profiles.
  if (!token) return null;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'mylesh-portfolio',
      },
      body: JSON.stringify({ query, variables: { login: 'casual-loops' } }),
      next: { revalidate: 21600 },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error('GitHub contribution request failed:', response.status);
      return null;
    }

    const result = (await response.json()) as GraphQLResponse;
    const calendar = result.data?.user?.contributionsCollection?.contributionCalendar;

    if (result.errors?.length || !calendar || !Array.isArray(calendar.weeks)) {
      console.error('GitHub contribution response missing expected data');
      return null;
    }

    return calendar;
  } catch (error) {
    console.error('GitHub contributions unavailable:', error instanceof Error ? error.message : 'Unknown error');
    return null;
  }
}
