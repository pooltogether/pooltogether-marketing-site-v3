import React, { Component } from 'react'

// import { axiosInstance } from 'lib/axiosInstance'
import { poolToast } from 'lib/utils/poolToast'

export function withEmailSignup(WrappedComponent) {

  return class _withEmailSignup extends Component {
    getInitialState = () => {
      return {
        email: '',
        success: false
      }
    }

    state = this.getInitialState()

    handleEmailChange = (e) => {
      this.setState({
        email: e.target.value
      })
    }

    handleSubmit = async (e) => {
      e.preventDefault()

      if (this.state.email === '') {
        poolToast.error('Please enter a valid email address')
        return
      }

      const hostPortAndPath = `/.netlify/functions/mailchimp-signup`

      let response

      try {
        const {
          listId
        } = this.props

        if (!listId) {
          poolToast.error('No listId supplied in props')
          throw new Error('No listId supplied in props')
        }

        debugger
        response = await fetch(hostPortAndPath, {
          method: 'POST',
          // mode: 'cors', // no-cors, *cors, same-origin
          // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          // headers: {
          //   'Content-Type': 'application/json'
          //   // 'Content-Type': 'application/x-www-form-urlencoded',
          // },
          // redirect: 'follow', // manual, *follow, error
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data) // body data type must match "Content-Type" header
          body: JSON.stringify({
            email: this.state.email,
            listId
          })
        })
        debugger
        const data = await response.json()
        console.log({data})

        if (response.status === 201) {
          this.setState({
            success: true
          })
        }
      } catch (error) {
        console.error(error.message)
        poolToast.error('There was an issue subscribing you (possibly invalid email?)')
      }
    }

    render() {
      return <WrappedComponent
        {...this.props}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        success={this.state.success}
      />
    }
  }
}
