import React from "react";
import { useHistory } from "react-router";
import { RecipeCard, RecipeImage, Button, RecipeHeader } from "./HomeStyle";
import defaultImg from '../../assets/default-image.jpg';

const RecipeCardComp = ({ recipe }) => {
  const history = useHistory();
  const moreClick = () => {
    // history.push("/view")
    history.push({
      pathname: "/details",
      recipe: recipe,
    });
  };
  return (
    <RecipeCard>
      <RecipeHeader>{recipe?.label}</RecipeHeader>
      <RecipeImage src={recipe?.image ?? defaultImg} alt="" />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
