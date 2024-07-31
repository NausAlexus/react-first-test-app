import React from 'react';

// Компоненты
class AddUser extends React.Component{

    userAdd = {}

    constructor(props){
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            avatar: "",
            email: "",
            isHappy: false
        }
    }

	render () {
		return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
                <textarea placeholder='Аватар' onChange={(e) => this.setState({avatar: e.target.value})}></textarea>
                <input placeholder="Почта" onChange={(e) => this.setState({email: e.target.value})}/>
                <label htmlFor='isHappy'>Счастлив?</label>
                <input type='checkbox' id='isHappy' onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        avatar: this.state.avatar,
                        email: this.state.email,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                }
                }>Добавить</button>
            </form>
		)
	}
}

export default AddUser;