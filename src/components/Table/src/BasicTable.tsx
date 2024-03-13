import { Button, Table, Tooltip, Popconfirm, Space, Form } from "antd";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { SyncOutlined } from "@ant-design/icons";

import { FormSchema } from "/@/components/Form/src/types/form";
import { componentMap } from "/@/components/Form/src/componentMap";
import { PAGE_SIZE, PAGE_SIZE_OPTIONS } from "/@/utils";
import { BasePagination } from "/@/apis/types";
import { PageWrapperBody } from "/@/components/Page/src/components";

import { ActionItem } from "./types/tableAction";
import { BasicColumn } from "./types/table";
import BasicForm from "../../Form/src/BasicForm";
import "./index.scss";

function BasicTable({
  dataForm,
  actionColum,
  api,
  toolbar,
  columns,
  reload,
}: {
  dataForm?: FormSchema[];
  actionColum: {
    width?: number | string;
    actions: (record: any) => ActionItem[];
  };
  api: (...arg: any) => Promise<{items:any,total:number}>;
  toolbar?: JSX.Element;
  columns: BasicColumn[];
  reload?: boolean;
}) {
  const [dataTable, setDataTable] = useState<any[]>();
  const [total, setTotal] = useState<number>();
  const [activePage, setActivePage] = useState<number>(1);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [textSearch, setTextSearch] = useState({});

  const getColumn = (): BasicColumn[] => [
    ...columns.map((i)=>{
      return {...i}
    }),
    {
      title: "Action",
      key: "action",
      fixed:"right",
      width: actionColum.width || 220,
      render: (_: any, record: any) =>
        actionColum.actions(record).map((item, key) => {
          return (
            <Tooltip title={item.tooltip} key={key}>
              <Popconfirm
                disabled={!item.popConfirm || item.disabled}
                title={item.popConfirm?.title}
                description={item.popConfirm?.description}
                onConfirm={item.popConfirm?.confirm}
                onCancel={item.popConfirm?.cancel}
                okText={item.popConfirm?.okText || "Xác nhận"}
                cancelText={item.popConfirm?.cancelText || "Hủy"}
                placement={item.popConfirm?.placement}
              >
                <Button
                  icon={getComponent(item)}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  type={item.color === "primary" ? "link" : "text"}
                  danger={item.color === "danger"}
                />
              </Popconfirm>
            </Tooltip>
          );
        }),
    },
  ];

  useEffect(() => {
    // nếu như reload thay đổi thì get lại data
    handleSearch(activePage, limit);
  }, [reload]);

  const getComponent = (actionItem: ActionItem) => {
    return actionItem.icon
      ? {
        ...componentMap.get(actionItem.icon)!,
        props: {
          style: { color: actionItem.color },
          onClick: actionItem.onClick,
        },
      }
      : false;
  };

  const [form] = Form.useForm();

  const handleSearch = async (page?: number, pageSize?: number) => {
    let dataSearch: {items:any , total:number};
    if (!!page && !!pageSize) {
      setActivePage(page);
      setLimit(pageSize);
      dataSearch = await api({ ...textSearch, page: page, pageSize });
    } else {
      await form.validateFields();
      const data = await form.getFieldsValue();
      setTextSearch(data);
      setActivePage(1);
      dataSearch = await api({ ...data, page: 1, pageSize: limit });
    }
    setDataTable(
      dataSearch.items.map((item: any, i: any) => {
        return {
          ...item,
          key: i,
        };
      })
    );
    console.log(dataSearch);
    
    setTotal(dataSearch.total);
  };

  const handleRefresh = async () => {
    form.resetFields();
    handleSearch();
  };

  useEffect(() => {
    // nếu như phần tử trong table ở trang hiện tại = 0 thì lùi trang
    if (activePage > 1 && dataTable?.length == 0) {
      handleSearch(activePage - 1, limit);
    }
  }, [dataTable]);

  useEffect(() => {
    handleSearch(1, PAGE_SIZE);
  }, []);

  const handleChange = (page: number, pageSize: number) => {
    pageSize !== limit
      ? handleSearch(1, pageSize)
      : handleSearch(page, pageSize);
  };

  return (
    <div id="basic-table">
      {dataForm ? <PageWrapperBody
        Child={
          <div>
            <BasicForm dataForm={dataForm} formSchema={form} />
            <div className="search-items">
              <Space>
                <Button icon={<SyncOutlined />} onClick={handleRefresh} style={{width:"auto"}}/>
                <Button
                  icon={<SearchOutlined />}
                  onClick={() => handleSearch()}
                >
                  Tìm Kiếm
                </Button>
              </Space>
            </div>
          </div>
        }
      /> : null}
      <PageWrapperBody
        Child={
          <div>
            <Table
              title={()=>toolbar}
              // bordered
              columns={getColumn()}
              dataSource={dataTable}
              pagination={{
                onChange: handleChange,
                current: activePage,
                pageSizeOptions: PAGE_SIZE_OPTIONS,
                defaultPageSize: PAGE_SIZE,
                total: total,
              }}
              scroll={{
                x:'70%'
              }
        }
            />
          </div>
        }
      />
    </div>
  );
}

export default BasicTable;
