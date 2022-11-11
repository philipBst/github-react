import { useCallback, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

import { Card, Container, Chip } from "../components";

import { getRepo } from "../api/methods";
import { IRepo } from "../interfaces";

const RepoPage: React.FC = () => {
  const [repo, setRepo] = useState<IRepo | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const [query] = useSearchParams();

  const owner = query.get("owner");
  const repoName = query.get("repoName");

  const fetchRepoDetails = useCallback(async () => {
    if (owner && repoName) {
      try {
        const repo = await getRepo(owner, repoName);
        setRepo(repo);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
    }
  }, [owner, repoName]);

  useEffect(() => {
    fetchRepoDetails();
  }, [owner, repoName]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-4 pt-8">
      <Container>
        <Link to="/" className="text-lg underline">
          Go to Home
        </Link>
      </Container>
      <Container>
        {isError ? (
          <Card>
            <p>
              Something went wrong.{" "}
              <span
                className="cursor-pointer hover:underline text-cyan-400"
                onClick={fetchRepoDetails}
              >
                Try Again
              </span>
            </p>
          </Card>
        ) : (
          <Card>
            <div className="flex items-center flex-col gap-3">
              <div className="w-full flex flex-col gap-4 items-center justify-center">
                <img
                  src="https://avatars.githubusercontent.com/u/69631?v=4"
                  alt=""
                  className="rounded-full w-32"
                />
              </div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Chip withExternalLink={repo?.owner.html_url}>
                    Author: {repo?.owner.login}
                  </Chip>
                  <Chip
                    withExternalLink={repo?.owner.html_url.concat(
                      "/",
                      repo?.name
                    )}
                  >
                    Repository: {repo?.name}
                  </Chip>
                </div>
                <div className="flex gap-2">
                  <Chip>Open Issues: {repo?.open_issues}</Chip>
                  <Chip>Default branch: {repo?.default_branch}</Chip>
                </div>
              </div>
            </div>
          </Card>
        )}
        {Boolean(isError) || <div className="w-full h-48"></div>}
      </Container>
    </div>
  );
};

export default RepoPage;
