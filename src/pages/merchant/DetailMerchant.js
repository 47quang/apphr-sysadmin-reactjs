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
import {
  activateMerchant,
  getMerchant,
  updateMerchant
} from '../../stores/actions/merchant';
import utils from '../../utils';

function DetailMerchant(props) {
  const dispatch = useDispatch();
  const merchant = useSelector(state => state.merchant.merchant);
  const provinces = useSelector(state => state.province.provinces);
  const districts = useSelector(state => state.province.districts);
  const wards = useSelector(state => state.province.wards);

  const [detail, setDetail] = useState({
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
    setDetail({ ...detail, ...merchant });
  }, [merchant.id]);

  useEffect(() => {
    dispatch(fetchDistricts({ id: detail.provinceId }));
  }, [detail.provinceId]);

  useEffect(() => {
    dispatch(fetchWards({ id: detail.districtId }));
  }, [detail.provinceId, detail.districtId]);

  function randomCode() {
    setDetail({ ...detail, code: utils.generateCode(5, true) });
  }

  function back() {
    props.history.goBack();
  }

  function update() {
    dispatch(updateMerchant(detail));
  }

  function mapProvince(p) {
    return (
      <option key={p.id} value={p.id}>
        {p.name}
      </option>
    );
  }

  function onActivate() {
    dispatch(activateMerchant(detail.id, merchant.status === 'active'));
  }

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
                value={detail.name}
                onChange={e => setDetail({ ...detail, name: e.target.value })}
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="merchant-code">Workspace</CLabel>
              <CInputGroup>
                <CInput
                  id="merchant-code"
                  size="16"
                  type="text"
                  placeholder="Nhập Workspace"
                  value={detail.code}
                  onChange={e => setDetail({ ...detail, code: e.target.value })}
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
              <CLabel htmlFor="email">Email</CLabel>
              <CInput
                id="email"
                placeholder="Nhập email"
                required
                value={detail.email}
                onChange={e => setDetail({ ...detail, email: e.target.value })}
              />
            </CFormGroup>
          </CCol>

          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="phone" className="bold">
                Số điện thoại
              </CLabel>
              <CInput
                id="phone"
                placeholder="Nhập số điện thoại"
                required
                value={detail.phone}
                onChange={e => setDetail({ ...detail, phone: e.target.value })}
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
                value={detail.taxCode}
                onChange={e =>
                  setDetail({ ...detail, taxCode: e.target.value })
                }
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="address">Địa chỉ</CLabel>
              <CInput
                id="address"
                placeholder="Nhập địa chỉ"
                required
                value={detail.address}
                onChange={e =>
                  setDetail({ ...detail, address: e.target.value })
                }
              />
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
                value={detail.username}
                onChange={e =>
                  setDetail({ ...detail, username: e.target.value })
                }
              />
            </CFormGroup>
          </CCol>
          <CCol xs="6">
            <CFormGroup>
              <CLabel htmlFor="sub-account">Số lượng tài khoản</CLabel>
              <CInput
                id="sub-account"
                placeholder="Nhập số lượng tài khoản"
                required
                value={detail.amountOfAccount}
                onChange={e =>
                  setDetail({ ...detail, amountOfAccount: e.target.value })
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
                value={detail.provinceId}
                onChange={e =>
                  setDetail({ ...detail, provinceId: e.target.value })
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
                value={detail.districtId}
                onChange={e =>
                  setDetail({ ...detail, districtId: e.target.value })
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
                value={detail.wardId}
                onChange={e => setDetail({ ...detail, wardId: e.target.value })}
              >
                <option key={0} value={0}>
                  Chọn phường/xã/thị trấn
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
            background: `${merchant.status === 'active' ? 'red' : '#555e6d'}`,
            color: 'white',
            position: 'absolute',
            right: 120
          }}
          onClick={onActivate}
        >
          {merchant.status === 'active' ? 'Hủy kích hoạt' : 'Kích hoạt'}
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
