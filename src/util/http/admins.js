import request from './helpers/request';

const BASE_URL = '/admins';

export async function postAdmin(admin) {
  const newAdmin = function (admin) {
    return {
      firstName: admin.firstName,
      middleName: admin.middleName,
      lastName: admin.lastName,
      email: admin.email,
      idNumber: admin.idNumber,
      phoneNumber: admin.phoneNumber,
      addressNumber: admin.addressNumber,
      addressCode: admin.addressCode,
      addressTown: admin.addressTown,
    };
  }(admin);

  return await request({
    url: `${BASE_URL}/register`,
    method: 'POST',
    body: newAdmin,
    headers: {
      Authorization: `Bearer ${admin.token}`,
    }
  });
}

export async function login({
  email,
  password
}) {
  return await request({
    url: `${BASE_URL}/login`,
    method: 'POST',
    body: {
      email,
      password,
    }
  });
}

export async function changePassword({
  adminId,
  oldPassword,
  newPassword,
  newPasswordConfirm
}) {
  return await request({
    url: `${BASE_URL}/${adminId}/change-password`,
    method: 'PUT',
    body: {
      oldPassword,
      newPassword,
      newPasswordConfirm
    }
  });
}