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
import { getMerchant, updateMerchant } from '../../stores/actions/merchant';
import utils from '../../utils';

function DetailMerchant(props) {
  const dispatch = useDispatch();
  const merchant = useSelector(state => state.merchant.merchant);
  const provinces = useSelector(state => state.province.provinces);
  const districts = useSelector(state => state.province.districts);
  const wards = useSelector(state => state.province.wards);

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

  useEffect(() => {
    dispatch(getMerchant(props.match.params));
    dispatch(fetchProvinces());
  }, []);

  useEffect(() => {
    setState({ ...state, ...merchant });
  }, [merchant.id]);

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
    props.history.goBack();
  }

  function update() {
    dispatch(updateMerchant(state));
  }

  const mapProvince = p => (
    <option key={p.id} value={p.id}>
      {p.name}
    </option>
  );

  return (
    <CCard style={{ width: '60%', margin: 'auto' }}>
      <CCardHeader>
        <h4 style={{ margin: 0 }}>Thông tin doanh nghiệp</h4>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="merchant-name">Tên doanh nghiệp</CLabel>
              <CInput
                id="merchant-name"
                placeholder="Nhập tên doanh nghiệp"
                required
                value={state.name}
                onChange={e => setState({ ...state, name: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="merchant-code">Tên viết tắt</CLabel>
              <CInputGroup>
                <CInput
                  id="merchant-code"
                  size="16"
                  type="text"
                  placeholder="Nhập tên viết tắt"
                  value={state.code}
                  onChange={e => setState({ ...state, code: e.target.value })}
                />
                <CInputGroupAppend>
                  <CButton color="secondary" onClick={randomCode}>
                    Ngẫu nhiên
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
                placeholder=""
                required
                disabled
                value={state.username}
                onChange={e => setState({ ...state, username: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="password">Mật khẩu</CLabel>
              <CInput
                type="password"
                id="password"
                placeholder=""
                required
                disabled
                value={state.password}
                onChange={e => setState({ ...state, password: e.target.value })}
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="address">Địa chỉ</CLabel>
              <CInput
                id="address"
                placeholder="Nhập địa chỉ"
                required
                value={state.address}
                onChange={e => setState({ ...state, address: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="phone">Số điện thoại</CLabel>
              <CInput
                id="phone"
                placeholder="Nhập số điện thoại"
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
              <CLabel htmlFor="tax-code">Mã số thuế</CLabel>
              <CInput
                id="tax-code"
                placeholder="Nhập mã số thuế"
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
                placeholder="Nhập email"
                required
                value={state.email}
                onChange={e => setState({ ...state, email: e.target.value })}
              />
            </CFormGroup>
          </CCol>
        </CRow>
        <CRow>
          {/* <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="logo"></CLabel>
              <CInput
                id="logo"
                placeholder="Enter your logo link"
                required
                value={state.logo}
                onChange={e => setState({ ...state, logo: e.target.value })}
              />
            </CFormGroup>
          </CCol> */}
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="sub-account">Số lượng tài khoản</CLabel>
              <CInput
                id="sub-account"
                placeholder="Nhập số lượng tài khoản"
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
              <CLabel htmlFor="province">Tỉnh/Thành phố</CLabel>
              <CSelect
                custom
                name="province"
                id="province"
                value={state.provinceId}
                onChange={e =>
                  setState({ ...state, provinceId: e.target.value })
                }
              >
                <option key={0} value={0}>
                  Chọn tỉnh
                </option>
                {provinces.map(mapProvince)}
              </CSelect>
            </CFormGroup>
          </CCol>
          <CCol xs="4">
            <CFormGroup>
              <CLabel htmlFor="district">Quận/Huyện</CLabel>
              <CSelect
                custom
                name="district"
                id="district"
                value={state.districtId}
                onChange={e =>
                  setState({ ...state, districtId: e.target.value })
                }
              >
                <option key={0} value={0}>
                  Chọn quận/huyện
                </option>
                {districts.map(mapProvince)}
              </CSelect>
            </CFormGroup>
          </CCol>
          <CCol xs="4">
            <CFormGroup>
              <CLabel htmlFor="ward">Phường/xã/Thị trấn</CLabel>
              <CSelect
                custom
                name="ward"
                id="ward"
                value={state.wardId}
                onChange={e => setState({ ...state, wardId: e.target.value })}
              >
                <option key={0} value={0}>
                  Chọn phường,xã,thị trấn
                </option>
                {wards.map(mapProvince)}
              </CSelect>
            </CFormGroup>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter style={{ position: 'relative', height: 60 }}>
        <CButton
          size="md"
          style={{
            background: '#555e6d',
            color: 'white',
            position: 'absolute',
            left: 20
          }}
          onClick={back}
        >
          Quay về
        </CButton>
        <CButton
          size="md"
          style={{
            background: '#555e6d',
            color: 'white',
            position: 'absolute',
            right: 20
          }}
          onClick={update}
        >
          Cập nhật
        </CButton>
      </CCardFooter>
    </CCard>
  );
}

export default DetailMerchant;
