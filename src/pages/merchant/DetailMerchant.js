import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupAppend,
  CLabel,
  CRow,
  CSelect,
  CCardFooter
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDistricts,
  fetchProvinces,
  fetchWards
} from '../../stores/actions/province';
import { createMerchant } from '../../stores/actions/merchant';
import utils from '../../utils';

function DetailMerchant(props) {
  const [state, setState] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    code: '',
    phone: '',
    taxCode: '',
    provinceId: 0,
    districtId: 0,
    wardId: 0,
    address: '',
    note: '',
    logo: '',
    amountOfAccount: 10
  });

  const dispatch = useDispatch();
  const provinces = useSelector(state => state.province.provinces);
  const districts = useSelector(state => state.province.districts);
  const wards = useSelector(state => state.province.wards);

  useEffect(() => {
    dispatch(fetchProvinces());
  }, []);

  useEffect(() => {
    dispatch(fetchDistricts({ id: state.provinceId }));
  }, [state.provinceId]);

  useEffect(() => {
    dispatch(fetchWards({ id: state.districtId }));
  }, [state.provinceId, state.districtId]);

  function randomCode() {
    setState({ ...state, code: utils.generateCode(5, true) });
  }

  function back() {
    props.history.back();
  }

  function update() {
    dispatch(createMerchant(state));
  }

  return (
    <CCard>
      <CCardHeader>
        <h2>Update Merchant</h2>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="merchant-name">Merchant name</CLabel>
              <CInput
                id="merchant-name"
                placeholder="Enter your merchant name"
                required
                value={state.name}
                onChange={e => setState({ ...state, name: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="merchant-code">Merchant code</CLabel>
              <CInputGroup>
                <CInput
                  id="merchant-code"
                  size="16"
                  type="text"
                  placeholder="Enter your merchant code"
                  value={state.code}
                  onChange={e => setState({ ...state, code: e.target.value })}
                />
                <CInputGroupAppend>
                  <CButton color="secondary" onClick={randomCode}>
                    Random
                  </CButton>
                </CInputGroupAppend>
              </CInputGroup>
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="username">Username</CLabel>
              <CInput
                id="username"
                placeholder="Enter your username"
                required
                value={state.username}
                onChange={e => setState({ ...state, username: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="password">Password</CLabel>
              <CInput
                type="password"
                id="password"
                placeholder="Enter your password"
                required
                value={state.password}
                onChange={e => setState({ ...state, password: e.target.value })}
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="address">Address</CLabel>
              <CInput
                id="address"
                placeholder="Enter your address"
                required
                value={state.address}
                onChange={e => setState({ ...state, address: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="phone">Phone</CLabel>
              <CInput
                id="phone"
                placeholder="Enter your phone"
                required
                value={state.phone}
                onChange={e => setState({ ...state, phone: e.target.value })}
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="tax-code">Tax code</CLabel>
              <CInput
                id="tax-code"
                placeholder="Enter your tax code"
                required
                value={state.taxCode}
                onChange={e => setState({ ...state, taxCode: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="email">Email</CLabel>
              <CInput
                id="email"
                placeholder="Enter your email"
                required
                value={state.email}
                onChange={e => setState({ ...state, email: e.target.value })}
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="logo">Logo link</CLabel>
              <CInput
                id="logo"
                placeholder="Enter your logo link"
                required
                value={state.logo}
                onChange={e => setState({ ...state, logo: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="sub-account">Amount of sub account</CLabel>
              <CInput
                id="sub-account"
                placeholder="Enter your amount of sub account"
                required
                value={state.amountOfAccount}
                onChange={e =>
                  setState({ ...state, amountOfAccount: e.target.value })
                }
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="4">
            <CFormGroup>
              <CLabel htmlFor="province">Province</CLabel>
              <CSelect
                custom
                name="province"
                id="province"
                defaultValue={state.provinceId}
                onChange={e =>
                  setState({ ...state, provinceId: e.target.value })
                }
              >
                <option key={0} value={0}>
                  Select province
                </option>
                {provinces.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </CSelect>
            </CFormGroup>
          </CCol>
          <CCol xs="4">
            <CFormGroup>
              <CLabel htmlFor="district">District</CLabel>
              <CSelect
                custom
                name="district"
                id="district"
                onChange={e =>
                  setState({ ...state, districtId: e.target.value })
                }
              >
                <option key={0} value={0}>
                  Select district
                </option>
                {districts.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </CSelect>
            </CFormGroup>
          </CCol>
          <CCol xs="4">
            <CFormGroup>
              <CLabel htmlFor="ward">Ward</CLabel>
              <CSelect
                custom
                name="ward"
                id="ward"
                onChange={e => setState({ ...state, wardId: e.target.value })}
              >
                <option key={0} value={0}>
                  Select ward
                </option>
                {wards.map(p => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </CSelect>
            </CFormGroup>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CButton
          size="md"
          style={{ background: '#555e6d', color: 'white' }}
          onClick={back}
        >
          Quay về
        </CButton>
        <CButton
          size="md"
          style={{ background: '#555e6d', color: 'white', marginLeft: '40px' }}
          onClick={create}
        >
          Cập nhật
        </CButton>
      </CCardFooter>
    </CCard>
  );
}

export default DetailMerchant;
