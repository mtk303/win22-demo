import React from "react";
import user from "../assets/img/user.png";
import {  Form } from "react-bootstrap";
import '../assets/css/profile.css'

const ProfilePage = () => {
  return (
    <div className="px-2 py-5 d-flex flex-column  align-items-center">
      <img
        src={user}
        style={{ width: "90px", height: "90px", borderRadius: "100%" }}
      />
      <div className="mt-3 d-flex align-items-center gap-2">
        <i class="fa-solid fa-wallet"></i>
        <span>K 9,850</span>
      </div>
      <Form className="my-4" >
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Name..."
            readOnly
            value={'Testing User'}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Phone..."
            value={'0912345689'}
           
          />
        </Form.Group>
        <button
          className="profileBtn float-end"
          
          type="submit"
        >
          ပြောင်းမည်
        </button>
      </Form>
    </div>
  );
};

export default ProfilePage;