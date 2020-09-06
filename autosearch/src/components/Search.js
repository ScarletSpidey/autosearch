import React,{ Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {
    
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array).isRequired
    };

    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
      };

    onChange = (e) => {
        console.log('onChanges');

        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const filteredOptions = suggestions.filter(
            (optionName) =>
            optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e) => {
        this.setState({
          activeOption: 0,
          filteredOptions: [],
          showOptions: false,
          userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = (e) => {
        const { activeOption, filteredOptions } = this.state;
    
        if (e.keyCode === 13) {
          this.setState({
            activeOption: 0,
            showOptions: false,
            userInput: filteredOptions[activeOption]
          });
        } else if (e.keyCode === 38) {
          if (activeOption === 0) {
            return;
          }
          this.setState({ activeOption: activeOption - 1 });
        } else if (e.keyCode === 40) {
          if (activeOption === filteredOptions.length - 1) {
            console.log(activeOption);
            return;
          }
          this.setState({ activeOption: activeOption + 1 });
        }
    };

    render() {

        const {
            onChange,
            onClick,
            onKeyDown,
            state: { activeOption, filteredOptions, showOptions, userInput }
          } = this;

         let suggestionList;
         if (showOptions && userInput) {
            if (filteredOptions.length) {
              suggestionList = (
                <ul className="options">
                  {filteredOptions.map((optionName, index) => {
                    let className;
                    if (index === activeOption) {
                      //className = 'option-active';
                      className = "border-4 border-white p-6 bg-gray-800 rounded-lg w-9/12";
                    }
                    else{
                        className= "border border-gray-800 p-6 bg-gray-800 rounded-lg w-9/12"
                    }
                    return (
                        <div className="text-white bg-gray-900 body-font ">
                            <div className="container mx-auto p-5 pl-48 flex-col md:flex-row items-center">
                                <div className="flex flex-wrap -m-4">
                                    <div className="xl:w-full md:w-full p-4">
                                        <div className={className} onClick={onClick}>
                                            <center>
                                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-700 text-blue-400 mb-4">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                </div>
                                                <h2 className="text-lg text-white text-2xl font-medium title-font ">
                                                    <li key={optionName}>
                                                        {optionName}
                                                    </li>
                                                </h2>
                                                <p className="leading-relaxed text-base"></p>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionList = (
                <div className="no-options">
                  <em>No Option!</em>
                </div>
              );
            }
          }

        return (
            <React.Fragment>
                <div className="container mx-auto p-5 flex-col md:flex-row items-center">
                    <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto mb-6">
                        {/* hero */}
                        <div className="hero">
                            <div className="box pt-6">
                                <div className="box-wrapper">
                                    <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                                        <button type="submit" className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                                        <input 
                                            type="text"
                                            placeholder="Type to Search..." 
                                            onChange={onChange}
                                            onKeyDown={onKeyDown}
                                            value={userInput}
                                            x-model="q" 
                                            className="w-full h-10 rounded-full pl-4 text-md outline-none focus:outline-none bg-transparent search-box" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {suggestionList}
                </div>
            </React.Fragment>
    
    
        );
    }
}

export default Search;