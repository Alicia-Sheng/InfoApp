import React from 'react';

const InfoContext = React.createContext();

class InfoProvider extends React.Component {

    state = {
        name: '',
        month: '',
        date: '',
        food: '',
        color: '',
        meal: '',
        year: '',
    };

    setName = (name) => {
        this.setState({name});
    };

    setMonth = (month) => {
        this.setState({month});
    };

    setDate = (date) => {
        this.setState({date});
    };

    setFood = (food) => {
        this.setState({food});
    };

    setColor = (color) => {
        this.setState({color});
    };

    setMeal = (meal) => {
        this.setState({meal});
    };

    setYear = (year) => {
        this.setState({year});
    };

    firstNavigate = this.firstNavigate.bind(this);
    firstNavigate() {
        return (
            this.state.name !== '' && this.state.month !== '' && this.state.date !== '' && this.state.food !== ''
        )
    };

    secondNavigate = this.secondNavigate.bind(this);
    secondNavigate() {
        return (
            this.state.color !== '' && this.state.meal !== '' && this.state.year !== ''
        )
    };

    refresh = () => {
        this.setState({
            name: '',
            month: '',
            date: '',
            food: '',
            color: '',
            meal: '',
            year: '',
        });
    };

    render() {
        return (
            <InfoContext.Provider
                value={{
                    name: this.state.name,
                    month: this.state.month,
                    date: this.state.date,
                    food: this.state.food,
                    color: this.state.color,
                    meal: this.state.meal,
                    year: this.state.year,
                    setName: this.setName,
                    setMonth: this.setMonth,
                    setDate: this.setDate,
                    setFood: this.setFood,
                    setColor: this.setColor,
                    setMeal: this.setMeal,
                    setYear: this.setYear,
                    firstNavigate: this.firstNavigate,
                    secondNavigate: this.secondNavigate,
                    refresh: this.refresh,
                }}
            >
                {this.props.children}
            </InfoContext.Provider>
        )
    }

};

export { InfoProvider, InfoContext };