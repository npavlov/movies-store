import React from 'react';
import MovieStoreService from '../../services';

const {
    Provider : MovieStoreServiceProvider,
    Consumer : MovieStoreServiceConsumer
} = React.createContext<MovieStoreService>((undefined as any) as MovieStoreService);

export {
    MovieStoreServiceProvider, MovieStoreServiceConsumer
}