import { reactive } from "vue"

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cardsList: [],
    searchOption: "",
    apiTypeParameter: "type"
    // loading: true,
});