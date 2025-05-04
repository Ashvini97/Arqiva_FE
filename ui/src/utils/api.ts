export interface Contribution {
    id: number;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    owner: string;
  }
  
  interface ContributionResponse {
    contributions: Contribution[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export async function fetchContributions(
    params: {
      skip?: number;
      limit?: number;
      title?: string;
      owner?: string;
      order_by?: string;
      match?: "all" | "any";
    } = {}
  ): Promise<ContributionResponse> {
    const url = new URL("http://localhost:8000/contributions/");
  
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        url.searchParams.append(key, value.toString());
      }
    });
  
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error("Failed to fetch contributions");
    }
  
    return response.json();
  }
  