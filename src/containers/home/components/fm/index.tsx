import Title from "@/containers/app/components/title";
import { getPersonalizedProgram } from "@/reducer/home";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const FM: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersonalizedProgram());
  }, [dispatch]);
  return <Title type="link">主播电台</Title>;
};

export default FM;
