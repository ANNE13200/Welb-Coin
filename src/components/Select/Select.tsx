import React from "react";
import i18next from "i18next";
import Cookies from "universal-cookie/cjs";
const cookies = new Cookies();

const SelectedLang = ( cookies.get("WELBLang") || window.localStorage.i18nextLng ) || "en";

class Select extends React.Component {
    state = { value: SelectedLang};

    change(event: React.FormEvent<HTMLSelectElement>) {
        // No longer need to cast to any - hooray for react!
        let safeLang: string = event.currentTarget.value;
        i18next.changeLanguage(safeLang);

        this.setState({
            value: safeLang
        });
        cookies.set("WELBLang", safeLang, { path: "/" });
    }

    render() {
        return (
            <label className={"mar-lr-8"}>
                <select value={ this.state.value } onChange={ e => this.change(e) }>
                    <option value="en">English</option>
                    <option value="de">German</option>
                </select>
            </label>
        );
    }
}


export default Select;
