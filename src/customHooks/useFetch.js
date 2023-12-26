import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function useFetch(url, query) {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false)
  const reloadData = ()=>{
    setReload(!reload)
  }
  const [paging, setPaging] = useState({
    page: 1,
    pageSize: 5,
    total: 10,
  });

  url += `?populate=*&pagination[page]=${paging.page}&pagination[pageSize]=${paging.pageSize}&${query}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.data);
        setPaging({
          ...res?.data?.meta?.pagination,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url, paging.page, paging.pageSize, reload, query]);

  return {data, setData, paging, setPaging, reload, reloadData};
}