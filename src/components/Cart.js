import { addComma } from "@/services/helpers";
import styles from "@/styles/Cart.module.scss";
import { useEffect, useState } from "react";
function Cart({ cart, setCart, openCart, setOpenCart }) {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const settingTotal = async () => {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        const itemTotal = (await cart[i].price) * cart[i].qty;
        total += await itemTotal;
      }
      setCartTotal(total);
    };
    settingTotal();
  }, [cart]);

  const handleRemoveItem = async (itemId) => {
    let otherProducts = await cart.filter((e) => {
      return e.id != itemId;
    });
    setCart([...otherProducts]);
  };

  return (
    <>
      {openCart && (
        <main className={styles.main}>
          <div onClick={() => setOpenCart(false)} className={styles.backdrop} />
          <div className={styles.cart}>
            <div className={styles.title}>My Cart</div>
            { cart?.length > 0 ?
              <>
                <div className={styles.subtitle}>Cart Summary</div>
                <div className={styles.items}>
                  {cart?.map((item, index) => {
                    return (
                      <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                          <img src={item?.image} alt="item" />
                        </div>
                        <div className={styles.details}>
                          <div className={styles.name}>{item?.name}</div>
                          <div className={styles.qty}>
                            Quantity: {item?.qty}
                          </div>
                          <div className={styles.priceAndRemove}>
                            <div className={styles.price}>
                              {addComma(item?.price)
                                }{" "}
                            </div>
                            <button
                              onClick={()=>handleRemoveItem(item?.id)}
                              className={styles.remove}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.total}>
                  Total:{" "}
                  {addComma(cartTotal)}{" "}
                  LE
                </div>
                <button
                  onClick={() => setOpenCart(false)}
                  className={styles.closeCart}
                >
                  <img src="./images/closeCart.svg" alt="closeCart" />
                </button>
              </>
             : <>
             <div className={styles.emptyCart}>
             Empty Cart
             </div>
              </>
            }
          </div>
        </main>
      )}
    </>
  );
}

export default Cart;
