import React, { useState, useEffect } from "react";
import BillItem from "../components/BillItem";
import MenuPopup from "../components/MenuPopup";
import MenuData from "./MenData";
import "../components/Scroller.css"
import { billService } from "../Services/BillService";
import BillPopup from "../components/BillPopup";
import TipPopup from "../components/TipPopup";
import OffersPopup from "../components/OffersPopup";
import OrderMethodPopup from "../components/OrderMethodPopup";
import BillItemPopup from "../components/BillItemPopup";

function POS() {
  const [menu, setMenu] = useState(MenuData);
  const [bill, setBill] = useState({});
  const [billItems,setBillItems] = useState([]);
  const [billDescription, setBillDesription] = useState();
  const [menuCategory, setMenuCategory] = useState('');
  const [selectedBillItem, setSelectedBillItem] = useState({})

  // Popup window state
  const [menuPopupShow, setMenuPopupShow] = useState(false);
  const [isBillPopupOpen, setIsBillPopupOpen] = useState(false);
  const [isTipPopupOpen, setIsTipPopupOpen] = useState(false);
  const [isOffersPopupOpen, setIsOffersPopupOpen] = useState(false);
  const [isOrderMethodOpen, setIsOrderMethodOpen] = useState(false);
  const [isBillItemPopupOpen, setIsBillItemPopupOpen] = useState(false);

  // bill description state
  const [customer,setCustomer] = useState('');
  const [orderMethod, setOrderMethod] = useState('');
  const [subTotal,setSubTotal] = useState(20);
  const [tip,setTip] = useState(0)
  const [offer,setOffer] = useState(0);
  const [total,setTotal] = useState(0);

  useEffect(()=>{billCalculate()},[billItems,offer,tip]);
  useEffect(()=>{console.log(selectedBillItem)},[selectedBillItem])

  const billCalculate = ()=>{
    let subTotalValue = 0;
    billItems.map((items)=>{
      subTotalValue = subTotalValue + items["amount"];
      
    })
    setSubTotal(prevValue=>{return subTotalValue});
    setTotal(prevValue=>{
      const totalValue = subTotalValue - offer + tip;
      return totalValue;
    })
    
  }

  const billCreate = ()=>{
    const billObject = {
      "billDescription": {
        "subTotal":subTotal,
        "offers":offer,
        "tip":tip,
        "total":total
      },
      "billItems":billItems
    };
    setBill(billObject);
    console.log(billObject);
    // billService(billObject)
  }


  const addBillItem = (item)=>{
    setBillItems(prevItems=>[...prevItems,item]);
    // console.log(billItems);
    billCalculate()
  }

  //Popup Handlers
  const menuPopupHandle=(value)=>{
    setMenuPopupShow(value)
  }

  // Bill Popup Handlers
  const handleOpenBillPopup = () => {
    setIsBillPopupOpen(true)
  }
  const handleCloseBillPopup = () => {
    setIsBillPopupOpen(false);
  };
  const handleNewBill = () => {
    setBillItems([]);
  }

  // Tip Popup Handlers
  const handleOpenTipPopup = () => {
    setIsTipPopupOpen(true);
  }
  const handleCloseTipPopup = () => {
    setIsTipPopupOpen(false);
  };
  const tipChange = (value) =>{
    setTip(value);
  }

  // Offers Popup Handlers
  const handleOpenOffersPopup = () => {
    setIsOffersPopupOpen(true);
  }
  const handleCloseOffersPopup = () => {
    setIsOffersPopupOpen(false);
  };
  const offersChange = (value) => {
    setOffer(value)
  }

  // Oder Method Handler
  const handleOpenOrderMethodPopup = () => {
    setIsOrderMethodOpen(true);
  };
  const handleCloseOrderMethodPopup = () => {
    setIsOrderMethodOpen(false);
  };
  const orderMethodHandle = (value) => {
    setOrderMethod(value);
  }

  // Bill Item Popup Handler
  const handleOpenBillItemPopup = () => {
    setIsBillItemPopupOpen(true);
  };
  const handleCloseBillItemPopup = () => {
    setIsBillItemPopupOpen(false);
  };
  const handleSelectBillItem = () => {
    return selectedBillItem;
  }



  return (
    <>
      <div className="w-full h-full mt-3 flex flex-row space-x-3">
        <MenuPopup
          menuSet={menu}
          category={menuCategory}
          addNewItem={addBillItem}
          show={menuPopupShow}
          menuPopupHandle={menuPopupHandle}
        />
        <div className="basis-9/12 h-full bg-secondry-bg-color rounded-lg">
          <div className="grid grid-cols-4 grid-rows-8  w-full h-full">
            <div
              className="bg-red-500 col-start-1 col-end-1 row-start-1 row-end-3 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("Appetizers");
              }}
            >
              Appetizers
            </div>
            <div
              className="bg-green-500 col-start-2 col-end-3 row-start-1 row-end-3 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("Mains");
              }}
            >
              Mains
            </div>
            <div
              className="bg-purple-500 col-start-3 col-end-4 row-start-1 row-end-2 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("Salads");
              }}
            >
              Salads
            </div>
            <div
              className="bg-yellow-500 col-start-3 col-end-4 row-start-2 row-end-3 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("Sides");
              }}
            >
              Sides
            </div>
            <div
              className="bg-purple-500 col-start-1 col-end-2 row-start-3 row-end-5 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("RiceAndCurry");
              }}
            >
              Rice And Curry
            </div>
            <div
              className="bg-blue-500 col-start-2 col-end-2 row-start-3 row-end-5 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("StreetFood");
              }}
            >
              Street Food
            </div>
            <div
              className="bg-gray-500 col-start-3 col-end-4 row-start-3 row-end-5 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("Desserts");
              }}
            >
              Desserts
            </div>
            <div
              className="bg-cyan-500 col-start-4 col-end-4 row-start-1 row-end-4 flex text-xl p-4 cursor-pointer"
              onClick={() => {
                setMenuPopupShow(true);
                setMenuCategory("Beverages");
              }}
            >
              Beverages
            </div>

            <div
              className="bg-lite-bg-color col-start-4 col-end-5 row-start-7 row-end-9 flex text-xl p-1 cursor-pointer flex flex-row"
              onClick={() => {
                handleOpenTipPopup();
              }}
            >
              <span className="bg-red-600 h-full w-1"></span>
              <div className="px-2 flex flex-coll">Tip</div>
              {isTipPopupOpen && (
                <TipPopup tip={tipChange} onClose={handleCloseTipPopup} />
              )}
            </div>

            <div
              className="bg-lite-bg-color col-start-1 col-end-2 row-start-7 row-end-9 flex text-xl p-1 cursor-pointer flex flex-row"
              onClick={() => {
                handleOpenOffersPopup();
              }}
            >
              <span className="bg-green-600 h-full w-1"></span>
              <div className="px-2 flex flex-coll">Offers</div>
              {isOffersPopupOpen && (
                <OffersPopup
                  offers={offersChange}
                  onClose={handleCloseOffersPopup}
                />
              )}
            </div>
            <div
              className="bg-lite-bg-color col-start-3 col-end-3 row-start-7 row-end-9 flex text-xl p-1 cursor-pointer flex-row"
              onClick={() => {
                handleOpenOrderMethodPopup();
              }}
            >
              <span className="bg-yellow-600 h-full w-1"></span>
              <div className="px-2 flex flex-coll">Order Method</div>
              {isOrderMethodOpen && (
                <OrderMethodPopup onClose={handleCloseOrderMethodPopup} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-2 justify-between basis-3/12 h-full bg-secondry-bg-color rounded-lg">
          {/* bill Items area */}
          <div className="w-full h-79 overflow-y-scroll scroller flex flex-col space-y-2 snap-x">
            {billItems.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedBillItem(item);
                    // console.log(item);
                    // console.log(selectedBillItem);
                    handleOpenBillItemPopup();
                  }}
                >
                  <BillItem
                    key={index}
                    itemName={item.name}
                    unitPrice={item.unitPrice.toFixed(2)}
                    units={item.unitCount}
                    amount={item.amount.toFixed(2)}
                  />
                </div>
              );
            })}

            {/* <BillItem
              itemName="Fresh Lime Juice"
              unitPrice="200.00"
              units="2"
              amount="400.00"
            /> */}
          </div>
          {isBillItemPopupOpen && (
            <BillItemPopup
              item={selectedBillItem}
              onClose={handleCloseBillItemPopup}
            />
          )}

          {/* bill amount area */}
          <div className="flex flex-col bg-lite-bg-color rounded-lg">
            <div className="flex flex-col p-3 pt-4">
              <div className="flex flex-row justify-between">
                <span>Sub Total</span>
                <span>{subTotal}.00</span>
              </div>
              <div className="flex flex-row justify-between ">
                <span>Offers</span>
                <span className="text-red-500">{offer}.00</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Tip</span>
                <span>{tip}.00</span>
              </div>
              <div className="flex flex-row justify-between mt-5">
                <span className="text-2xl">Total</span>
                <span className="text-2xl">{total}.00</span>
              </div>
            </div>
            <button
              className="flex flex-row bg-blue-bg-color justify-center py-3 rounded-lg mt-2"
              onClick={() => {
                billCreate();

                handleOpenBillPopup();
              }}
            >
              View Checks
            </button>
            {isBillPopupOpen && (
              <BillPopup
                onClose={handleCloseBillPopup}
                bill={bill}
                newBill={handleNewBill}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default POS;
