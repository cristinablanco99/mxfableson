import React, { Component } from 'react';


import ComboBox from '../componentes/ComboBox'
import ComboBox2 from '../componentes/ComboBox2'
import ComboBox3 from '../componentes/ComboBox3'

import Dashboard from '../componentes/Dashboard'
import TabSelector from '../componentes/TabSelector'

import DashboardTradeReport from '../componentes/DashboardTradeReport'
//dashboards
import SustainableImporters from './SustainableImporters'
import SustainableExporters from './SustainableExporters'





class TradeReport extends Component {


    state = {
        select: {
            dashboard: "Sustainable_next_exporters"
        }

    }


    handleChange = e => {

        this.setState({
            select: {
                //el next code evitara que se sobrescriba cuando reciba un valor new
                ...this.state.select.dashboard,
                ["dashboard"]: e.target.value

            }

        })



    }

    selectDashboard(state) {

        console.log("entre switch")
        switch (state) {
            case 'Sustainable_next_exporters':
                this.dash = <SustainableExporters />;
                break;
            case 'Sustainable_next_importers':
                this.dash = <SustainableImporters />;
                break;
            case 'Current_trend_next_exporters':
                this.dash = <h1>Current_trend_next_exporters</h1>
                break;
            case 'Current_trend_next_importers':
                this.dash = <h1>Current_trend_next_importers</h1>
                break;
        }

    }

    render() {
        return (
            <div className="container">
                <div>
                    {/* mostrar las opciones de los diferentes tipos de dashboards en trade report*/}
                    <div className="dashboards-tradeReport">
                        <DashboardTradeReport metodo={this.handleChange} />
                    </div>

                    {/* metodo para saber que dashboard se elijio*/}
                    {this.selectDashboard(this.state.select.dashboard)}

                    {/*mostrar el dashboard elegido */}
                    {this.dash}

                </div>
            </div>
        )
    }
}
export default TradeReport;

