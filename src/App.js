import { useInfiniteQuery } from "react-query";
import { useEffect } from "react";
import EveryPost from "./components/EveryPost";
import SinglePost from "./components/SinglePost";
import NoPage from "./components/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const fetchRepositories = async (pageNum = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=5`
  );
  return response.json();
};

const App = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "repositories",
    ({ pageParam }) => fetchRepositories(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = 21;
        const nextPage = allPages.length + 1;
        return nextPage < maxPages ? nextPage : undefined;
      },
    }
  );

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  console.log(data);
  return (

      <BrowserRouter>
        <Routes>
          <Route
            key={"all"}
            path={"/postsfeed/"}
            element={<EveryPost posts={data} />}
          />
          {data.pages.map((page) =>
            page.map((post) => (

                <Route
                  key={"post_" + String(post.id)}
                  path={"/postsfeed/" + String(post.id)}
                  element={<SinglePost post={post} />}
                />
            ))
          )}

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
