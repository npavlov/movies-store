import React from "react";
import { MovieStoreServiceConsumer } from "../MovieStoreServiceContext";

const withMovieStoreService = () => (Wrapped: any) => {
  return (props: any) => {
    return (
      <MovieStoreServiceConsumer>
        {value => {
          return <Wrapped {...props} movieStoreService={value} />;
        }}
      </MovieStoreServiceConsumer>
    );
  };
};

export default withMovieStoreService;
