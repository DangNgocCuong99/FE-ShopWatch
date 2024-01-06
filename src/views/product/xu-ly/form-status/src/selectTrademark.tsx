import { Select } from "antd";
import { useEffect, useState } from "react";
import { useTrademarkApi } from "/@/apis";

import { Recordable } from "/@/utils";

function SelectStatus(attrs: Recordable) {
  const [options, setOptions] = useState<
    {
      value: string;
      label: string;
    }[]
  >();
  const { trademarkApi } = useTrademarkApi();
  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const res = await trademarkApi.getDataSelectTrademark();
      const transformData = res.data.map((i) => ({
        value: i._id,
        label: i.name,
      }));
      setOptions(transformData);
    } catch (error) {}
  };
  const getAtrr = () => {
    return {
      ...attrs,
    };
  };
  return <Select {...getAtrr()} options={options} />;
}
export default SelectStatus;
