import React from 'react';
import {
  ObjectPage,
  Button,
  FlexBox,
  Link,
  Label,
  ProgressIndicator,
  ObjectStatus,
  ObjectPageSection,
  Form,
  FormItem,
  Text,
  FormGroup,
  ButtonDesign
} from '@ui5/webcomponents-react';

function mappingStatus(status) {
  switch (status) {
    case 'NEW':
      return 'Information';
    case 'ACTIVE':
      return 'Success';
    case 'INACTIVE':
    case 'EXPIRED':
    case 'DELETED':
      return 'Error';
  }
}

function ObjectPageAccount({ data, t }) {
  return (
    <ObjectPage
      headerActions={[
        <Button key="1" design={ButtonDesign.Emphasized}>
          Edit
        </Button>,
        <Button key="2" design={ButtonDesign.Negative}>
          Remove
        </Button>,
        <Button key="3">Close</Button>
      ]}
      headerContent={
        <>
          <FlexBox direction="Column">
            <Link>{data.contactPhone}</Link>
            <Link href="mailto:ui5-webcomponents-react@sap.com">
              {data.contactEmail}
            </Link>
          </FlexBox>
          <FlexBox direction="Column" style={{ width: '200px' }}>
            <Label>Achieved Goals</Label>
            <ProgressIndicator value={80} valueState="Success" />
          </FlexBox>
          <FlexBox direction="Column">
            <Label>{data.address}</Label>
            <Label>{data.country}</Label>
          </FlexBox>
        </>
      }
      headerContentPinnable
      image={data.avatar}
      imageShapeCircle
      keyInfos={
        <ObjectStatus state={mappingStatus(data.status)}>
          {data.status}
        </ObjectStatus>
      }
      selectedSectionId="information-company"
      showHideHeaderButton
      style={{
        height: 800
      }}
      // subTitle="Senior UI Developer"
      title={data.name}
    >
      <ObjectPageSection
        aria-label="Information Company"
        id="information-company"
        title="Information Company"
      >
        <Form
          columnsS={2}
          columnsL={2}
          columnsM={2}
          columnsXL={3}
          labelSpanL={6}
          labelSpanM={6}
          labelSpanXL={6}
        >
          <FormItem label="Company name">
            <Text>{data.name || 'HF89SK78S'}</Text>
          </FormItem>
          <FormItem label="Email">
            <Text>{data.email || 'HF89SK78S'}</Text>
          </FormItem>
          <FormItem label="Tax code">
            <Text>{data.taxCode || 'HF89SK78S'}</Text>
          </FormItem>
          <FormItem label="Post code">
            <Text>{data.postcode || 'HF89SK78S'}</Text>
          </FormItem>
          <FormItem label="Sub domain">
            <Text>{data.subDomain || 'HF89SK78S'}</Text>
          </FormItem>
          <FormItem label="Mentor junior developers">
            <Text>Due Dec, 31 - Cascaded</Text>
          </FormItem>
        </Form>
      </ObjectPageSection>
      <ObjectPageSection aria-label="Personal" id="personal" title="Personal">
        <Form columnsL={4} columnsXL={4}>
          <FormGroup title="Phone Numbers">
            <FormItem label="Home">
              <Text>+1 234-567-8901</Text>
            </FormItem>
            <FormItem label="">
              <Text>+1 234-567-5555</Text>
            </FormItem>
          </FormGroup>
          <FormGroup title="Social Accounts">
            <FormItem label="LinkedIn">
              <Text>/DeniseSmith</Text>
            </FormItem>
            <FormItem label="Twitter">
              <Text>@DeniseSmith</Text>
            </FormItem>
          </FormGroup>
        </Form>
      </ObjectPageSection>
    </ObjectPage>
  );
}

export default ObjectPageAccount;
