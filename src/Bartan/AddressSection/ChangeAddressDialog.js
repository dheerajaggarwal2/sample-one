import { Radio } from "@material-ui/core";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { AddressList } from "../Constants";
import { getFromLocalStorage, setInLocalStorage } from "../utils";

const ChangeAddressDialog = (props) => {
  const { closeModal, openAddressDialog } = props;
  const savedAdress = getFromLocalStorage(AddressList) || [];
  const [addressList, setAdrresList] = React.useState(savedAdress);

  const selectAdress = (index) => {
    const updatedList = addressList.map((item, itemIndex) => {
      return (
        {
          ...item,
          isSelected: (itemIndex === index)
        }
      )
    });
    setAdrresList(updatedList);
    setInLocalStorage(AddressList, updatedList);
    closeModal();
  }

  return (
    <>
      <div className="headerContainer">
        <div className="backArrowStyle" onClick={() => {closeModal()}}>
          <BiArrowBack />
        </div>
        <div className="pdTop">
          {addressList.map((item, index) => {
            return (
              <div
                className="addressListSection"
                key={index}
              >
                <div>
                  <Radio
                    checked={item?.isSelected}
                    onChange={() => {selectAdress(index)}}
                    value={index}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                </div>
                <div>
                  <div>{item?.username}</div>
                  <div>{item?.address}</div>
                  <div>{item?.city}, {item?.state}, {item?.pincode}</div>
                </div>
              </div>
            )
          })
          }
        </div>
        <div className="footerAddAddress" onClick={() => { openAddressDialog() }}>
          <button type="submit" className="footerAddAddresHeading">Add New Address</button>  
        </div>
      </div>
    </>
  )
}

export default ChangeAddressDialog;