import React, { useEffect } from "react";
import HomeItem from "../Components/HomeItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";
import { ItemActions } from "../store/ItemSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";
const Home = () => {
  const items = useSelector((store) => store.items);

  const currentlyFetching = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentlyFetching.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.FetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.FetchDone());
        dispatch(fetchStatusActions.FetchingDone());
        dispatch(ItemActions.addInitialState(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [currentlyFetching]);

  return (
    <main>
      <div className="items-container">
        {currentlyFetching.currentlyFetching ? (
          <LoadingSpinner />
        ) : (
          items.map((item) => <HomeItem key={item.id} item={item} />)
        )}
      </div>
    </main>
  );
};

export default Home;
