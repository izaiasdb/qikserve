import { takeLatest, all } from "redux-saga/effects"
import API from "../services/Api";

import { ProductTypes } from '../pages/product/redux';
import { SongTypes } from '../pages/song/redux';

import * as Product from '../pages/product/sagas';
import * as Song from '../pages/song/sagas';

const api = API.create();

export default function * root () {
    yield all([
        takeLatest(ProductTypes.PRODUCT_SEARCH, Product.search, api),

        takeLatest(SongTypes.SONG_SEARCH, Song.search, api),
    ])
}
