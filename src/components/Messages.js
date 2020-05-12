import React, { useEffect } from 'react';
import { message } from 'antd';

export default function Messages({ success, removeSuccess,errors, removeError }) {
  useEffect(() => {
    if (errors.length) {
      message.error(errors[0]);
      removeError();
    }
    if (success.length) {
      message.success(success[0]);
      removeSuccess();
    }
  }, [errors, success]);
  return (
    <div>
    </div>
  );
}