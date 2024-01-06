import { Form, Input, Row, Col } from 'antd';

import { MODE } from '/@/utils';

import { componentMap } from './componentMap';
import { FormSchema } from './types/form';
import { FormInstance } from 'antd/lib/form/Form';
import "./index.css"

function BasicForm({ dataForm, formSchema, mode }: { dataForm: FormSchema[], formSchema: FormInstance, mode?: MODE }) {

  const getComponent = (data: FormSchema) => {
    return data.component && componentMap.get(data.component) ? { ...componentMap.get(data.component)!, props: { disabled: data.disabled ,...data.componentProps} } : <Input disabled={data.disabled} />
  }

  let formJsx = dataForm?.map((data, index) => {
    return (
      <Col offset={data.colProps?.offset} flex={data.colProps?.flex} xl={data.colProps?.xl || 12} sm={data.colProps?.sm} xs={data.colProps?.xs} xxl={data.colProps?.xxl} span={data.colProps?.span} md={data.colProps?.md} style={data.colProps?.style} key={index}>
        <Form.Item
          label={data.label}
          name={data.field}
          rules={data.rules}
        >
          {getComponent(data)}
        </Form.Item>
      </Col>
    )

  })

  // const getDefault = ()=>{
  //   let value = dataForm?.map((data) => {
  //       return (
  //         {
  //           name:data.field,
  //           value:data.defaultValue
  //         }
  //       )
  //   })
  //   return value 
  // }
  // TODO: bug gọi lại getDefault khi setState

  return (
    <div>
      <Form
        className='form-style'
        form={formSchema}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // style={{ maxWidth: "100%" }}
        initialValues={{ remember: true }}
        autoComplete="off"
        disabled={mode == MODE.VIEW ? true : false}
      // fields={getDefault()}
      >
        <Row>
          {formJsx}
        </Row>
      </Form>
    </div>
  )
}

export default BasicForm