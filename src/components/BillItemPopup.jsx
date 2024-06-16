import React,{useState} from 'react'

function BillItemPopup({item,onClose}) {
    const [unitCount,setUnitCount] = useState(item.unitCount)
    const [amount,setAmount] = useState(item.amount)
  return (
    <div
      className="z-0 fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="z-10 w-3/6 h-fit bg-secondry-bg-color p-2 rounded-xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full flex justify-end">
          <i
            className="fi fi-rr-cross p-3 cursor-pointer order-last"
            onClick={() => {
              onClose();
            }}
          ></i>
        </div>
        <div>
          <h1>{item.name}</h1>
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
        </div>
      </div>
    </div>
  );
}

export default BillItemPopup