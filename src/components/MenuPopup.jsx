import React,{useState, useEffect} from 'react'

function MenuPopUp(props) {
  const [menuPopupShow, setMenuPopupShow] = useState(props.show);
  const [menuCategory,setMenuCategory] = useState(props.category)
  const [menu,setMenu] = useState(props.menuSet);
  const [menuListShow, setMenuListShow] = useState(true);
  const [menuItemShow , setMenuItemShow] = useState(false);
  const [backBtnShow,setBackBtnShow] = useState(false)

  const [id, setId] = useState(0);
  const [name,setName] = useState('');
  const [unitPrice, setUnitPrice] = useState(0);
  const [unitCount, setUnitCount] = useState(1);
  const [amount,setAmount] = useState(0);

  useEffect(() => {
    setMenuPopupShow(props.show);
    setMenuCategory(props.category)
    setMenuListShow(true);
  }, [props.show,props.category]);

 

  const addItem =()=>{
    const calculatedAmount = unitPrice * unitCount;
    const item = {
      id: id,
      name: name,
      unitPrice: unitPrice,
      unitCount: unitCount,
      amount: calculatedAmount,
    };
    props.addNewItem(item);
    setMenuListShow(true);
    setBackBtnShow(false);
  }

  
  return (
    <div>
      {menuPopupShow && (
        <div className="z-0 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="z-10 w-3/6 h-3/5 bg-secondry-bg-color p-6 rounded-xl h-fit">
            <div className="flex justify-between  w-full">
              <div className="flex w-5 h-5 justify-center items-center active:bg-slate-100 active:aspect-square ">
                {backBtnShow && (
                  <i
                    className="fi fi-ts-arrow-small-left text-3xl p-3 active:bg-opacity-5 rounded-full cur"
                    onClick={() => {
                      setMenuListShow(true);
                      setBackBtnShow(false);
                    }}
                  ></i>
                )}
              </div>
              <div className="flex w-5 h-5 justify-center items-center active:bg-slate-100 active:aspect-square">
                <i
                  className="fi fi-rr-cross p-10 cursor-pointer order-last"
                  onClick={() => {
                    props.menuPopupHandle(false);
                    setMenuPopupShow(false);
                  }}
                ></i>
              </div>
            </div>
            {menuListShow ? (
              <div className=" h-96 overflow-y-scroll flex flex-col divide-y divide-lite-bg-color list-none my-4">
                {menu[menuCategory].map((data, index) => (
                  <li
                    key={index}
                    className="flex flex-shrink-0 px-2 pr-6 cursor-pointer justify-between select-none py-4"
                    onClick={() => {
                      setMenuListShow(false);
                      setBackBtnShow(true);
                      setId(data.id);
                      setName(data.name);
                      setUnitCount(1);
                      setUnitPrice(data.price);
                      setAmount(data.price);
                    }}
                  >
                    <span>{data.name}</span>
                    <span>{data.price.toFixed(2)}</span>
                  </li>
                ))}
              </div>
            ) : (
              <div className="h-96 my-4 flex flex-col">
                <div className="flex w-full justify-between">
                  <span className="text-2xl">{name}</span>
                  <span className="text-2xl ">{amount.toFixed(2)}</span>
                </div>

                <span className="text-md mt-1 text-slate-300">
                  {/* Amount: {amount.toFixed(2)} */}
                  Unite Price : {unitPrice.toFixed(2)}
                </span>

                <div className="bg-lite-bg-color w-fit rounded-full p-2 mt-8">
                  <i
                    className="fi fi-rr-minus-small p-4 cursor-pointer"
                    onClick={() => {
                      if (unitCount > 1) {
                        setUnitCount((value) => value - 1);
                        const count = unitCount - 1;
                        setAmount(() => {
                          return unitPrice * count;
                        });
                      }
                    }}
                  ></i>
                  <span>{unitCount}</span>
                  <i
                    className="fi fi-rr-plus-small p-4 cursor-pointer"
                    onClick={() => {
                      setUnitCount((value) => value + 1);
                      const count = unitCount + 1;
                      setAmount(() => {
                        return unitPrice * count;
                      });
                    }}
                  ></i>
                </div>

                <div className="h-full w-full flex items-end">
                  <button
                    className="bg-blue-bg-color w-full py-2 px-4 rounded-lg"
                    onClick={addItem}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPopUp