import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AddAddressDialog from "./AddAddressDialog";
import { getFromLocalStorage } from "../utils";
import { AddressList } from "../Constants";
import ChangeAddressDialog from './ChangeAddressDialog';

const ShowAddress = () => {
  const [addAddressopen, setAddadressOpen] = React.useState(false);
  const [changeAddressopen, setChangeadressOpen] = React.useState(false);
 
  const handleAddAddressClose = () => {
    setAddadressOpen(false);
  };

  const handleAddAddressOpen = () => {
    setAddadressOpen(true);
  };

  const handleChangeAddressClose = () => {
    setChangeadressOpen(false);
  };

  const handleChangeAddAddressOpen = () => {
    setChangeadressOpen(true);
  };

  const closeAllDialog = () => {
    handleChangeAddressClose()
    handleAddAddressClose();
  }


  const getAddress = () => {
    const savedAdress = getFromLocalStorage(AddressList) || [];
    if (savedAdress?.length) {
      const selectedAddress = savedAdress.find((element) => {
        return element?.isSelected;
      });
      return `Deliver To: ${selectedAddress?.username}, ${selectedAddress?.address}, ${selectedAddress?.city}, ${selectedAddress?.state} ${selectedAddress?.pincode}`;
    } else {
      return "No address Selected, Add a address";
    }
  }

  const buttonText = () => {
    const savedAdress = getFromLocalStorage(AddressList) || [];
    if (savedAdress?.length) {
      return "Change";
    } else {
      return "Add";
    }
  }

  const openDialog = () => {
    const savedAdress = getFromLocalStorage(AddressList) || [];
    if (savedAdress?.length) {
      handleChangeAddAddressOpen()
    } else {
      handleAddAddressOpen()
    }
  }

  return (
    <>
      <div className="showAddressContainer">
        <div className="addressField">
          {getAddress()}
        </div>
        <div className="addressButton">
          <button
            type="button"
            onClick={openDialog}
            className="openAddressDialog"
          >
            {buttonText()}
          </button>
        </div>
      </div>
     
      <Dialog
        onClose={handleAddAddressClose}
        open={addAddressopen}
        fullScreen
      >
        <AddAddressDialog closeModal={closeAllDialog}/>
      </Dialog>
      <Dialog
        onClose={handleChangeAddressClose}
        open={changeAddressopen}
        fullScreen
      >
        <ChangeAddressDialog
          closeModal={handleChangeAddressClose}
          openAddressDialog={handleAddAddressOpen}
        />
      </Dialog>
    </>
  )
}

export default ShowAddress;