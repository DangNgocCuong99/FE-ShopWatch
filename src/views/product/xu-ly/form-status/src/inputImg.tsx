import React, { useRef, useState,useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, Modal, Upload } from "antd";
import { Recordable } from "/@/utils";
import { UploadFile } from "antd/lib";
import { RcFile } from "antd/es/upload";

const props: UploadProps = {
  action: "http://localhost:3000/images",
  listType: "picture",
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  const maxImage = 5

const App: React.FC = (attrs: Recordable) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<any[]>([])
  const ref = useRef(attrs);

  useEffect(() =>{
    if (attrs.value === undefined) return
      ref.current = attrs
      setFileList(attrs.value)
  },[attrs])

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList)
    ref.current.onChange(newFileList)
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 25)
    );
  };

  const handleCancel = () => setPreviewOpen(false);
  return (
    <>
      <Upload
        fileList={fileList}
        onChange={handleChange}
        maxCount={maxImage}
        onPreview={handlePreview}
        {...props}
        multiple
      >
        {fileList?.length != maxImage && (
          <Button icon={<UploadOutlined />}>Upload</Button>
        )}
      </Upload>

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '200%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default App;
