import React from "react";
import { Div } from "./Ingredients.styled";

const Ingredients = () => {
  return (
    <>
      <h3>Ingredients</h3>
      <h4>Graham Cracker Crust</h4>
      <form action="#">
        <Div>
          <input type="checkbox" />
          <p for="#">
            1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full
            sheet graham crackers)
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            5 Tablespoons (70g) <b>unsalted butter</b>, melted
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            1/4 cup (50g) <b>granulated sugar</b>
          </p>
        </Div>
      </form>
      <h4>Cheesecake</h4>
      <form action="#">
        <Div>
          <input type="checkbox" />
          <p for="#">
            four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to
            room temperature
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            1 cup (200g) <b>granulated sugar</b>
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            1 cup (240g) full-fat <b>sour cream</b>, at room temperature
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            1 teaspoon <b>pure vanilla extract</b>
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            3 large <b>eggs</b>, at room temperature
          </p>
        </Div>
        <Div>
          <input type="checkbox" />
          <p for="#">
            topping suggestions:{" "}
            <i>
              salted caramel, lemon curd, strawberry topping, chocolate ganache,
              red wine chocolate ganache, fresh fruit, whipped cream, or
              raspberry sauce
            </i>{" "}
            (recipe in notes)
          </p>
        </Div>
      </form>
    </>
  );
};

export default Ingredients;
