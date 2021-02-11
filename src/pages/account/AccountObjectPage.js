import QInput from '@Component/QInput';
import {
  Button,
  ButtonDesign,
  FlexBox,
  Label,
  Link,
  ObjectPage,
  ObjectPageSection,
  ObjectStatus,
  ProgressIndicator
} from '@ui5/webcomponents-react';
import { FastField, Form, Formik } from 'formik';
import React, { useImperativeHandle, useState } from 'react';
import * as yup from 'yup';

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

function AccountObjectPage({ t, forwardedRef, changeLayout, gridRef }) {
  const [account, setAccount] = useState({});

  const validationSchema = yup.object().shape({
    companyName: yup.string().required('Đây là field được yêu cầu'),
    email: yup.string(),
    taxCode: yup.string(),
    postCode: yup.string(),
    subDomain: yup.string()
  });

  const initialValues = {
    name: '',
    email: '',
    taxCode: '',
    postCode: '',
    subDomain: ''
  };

  function changeAccount(acc) {
    setAccount(acc);
  }

  function closeObjectPage() {
    gridRef.current.setRowSelection('multiple');
    gridRef.current.deselectAll();
    changeLayout('OneColumn');
  }

  useImperativeHandle(
    forwardedRef,
    () => ({
      changeAccount
    }),
    []
  );

  const options = {
    headerActions: [
      <Button key="1" design={ButtonDesign.Emphasized}>
        Update
      </Button>,
      <Button key="2" design={ButtonDesign.Negative}>
        Delete
      </Button>,
      <Button key="3" onClick={closeObjectPage}>
        Close
      </Button>
    ],
    headerContentPinnable: true,
    image: account.avatar,
    imageShapeCircle: true,
    keyInfos: (
      <ObjectStatus state={mappingStatus(account.status)}>
        {account.status}
      </ObjectStatus>
    ),
    showHideHeaderButton: true,
    style: {
      height: 848
    },
    title: t('Detail information'),
    selectedSectionId: 'information-company'
  };

  return (
    <ObjectPage
      {...options}
      headerContent={
        <>
          <FlexBox direction="Column">
            <Label>{account.name}</Label>
            <Label>{account.contactPhone}</Label>
            <Link href="mailto:ui5-webcomponents-react@sap.com">
              {account.contactEmail}
            </Link>
            <Label>{account.address}</Label>
            <Label>{account.country}</Label>
          </FlexBox>
          <FlexBox direction="Column" style={{ width: '200px' }}>
            <Label>Progress bar</Label>
            <ProgressIndicator value={80} valueState="Success" hideValue />
          </FlexBox>
        </>
      }
    >
      <ObjectPageSection
        aria-label="Information Company"
        id="information-company"
        title="Information Company"
      >
        <Formik
          initialValues={Object.assign(initialValues, account)}
          enableReinitialize
          validationSchema={validationSchema}
        >
          {fProps => {
            return (
              <Form>
                <FastField
                  name="name"
                  component={QInput}
                  label="Company name"
                  placeholder="Enter company name"
                />
                <FastField
                  name="email"
                  component={QInput}
                  label="Email"
                  placeholder="Enter email"
                />
                <FastField
                  name="taxCode"
                  component={QInput}
                  label="Tax code"
                  placeholder="Enter tax code"
                />
                <FastField
                  name="postCode"
                  component={QInput}
                  label="Post code"
                  placeholder="Enter post code"
                />
                <FastField
                  name="subDomain"
                  component={QInput}
                  label="Sub domain"
                  placeholder="Enter sub domain"
                />
              </Form>
            );
          }}
        </Formik>
      </ObjectPageSection>
      <ObjectPageSection
        aria-label="Personal"
        id="personal"
        title="Personal"
      ></ObjectPageSection>
    </ObjectPage>
  );
}

export default AccountObjectPage;
