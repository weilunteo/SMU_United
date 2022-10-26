<template>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/browser-scss@1.0.3/dist/browser-scss.min.js">

<main class="main">
	<div class="container">
		<section class="wrapper">
			<div class="heading">
				<h1 class="text text-large">Log In</h1>
				<p class="text text-normal">New user? <span><router-link to="/signup" class="text text-links">Create an account</router-link></span>
				</p>
			</div>
			<form name="signin" class="form">
				<div class="mb-4">
					<label for="email" class="input-label fw-semibold mb-1 ml-3">Email Address<span class="text-danger">*</span></label>
					<input type="email" name="email" id="email" class="input-field" placeholder="Enter Email Address" required>
				</div>
				<div class="mb-4">
					<label for="password" class="input-label fw-semibold mb-1">Password<span class="text-danger">*</span></label>
					<input type="password" name="password" id="password" class="input-field" placeholder="Enter Password" required>
				</div>
				<div class="input-control">
					<a href="#" class="text text-links">Forgot Password?</a>
					<input type="submit" name="submit" class="input-submit" value="Log In" disabled>
				</div>
			</form>
			<div class="striped">
				<span class="striped-line"></span>
				<span class="striped-text">Or</span>
				<span class="striped-line"></span>
			</div>
			<div class="method">
				<div class="method-control">
					<button type="button" 
                    class="btn btn-light w-100 d-flex align-items-center justify-content-center"
                    v-on:click="loginWithGoogle()"
                    :disabled="isLoading">
                    <GoogleIcon class="me-2" /> Login with Google
                    </button>
				</div>
			</div>
		</section>
	</div>

</main>

</template>

<script>
import { toHandlers } from 'vue';
import GoogleIcon from '../components/icons/GoogleIcon.vue';

export default {
    name: "LoginView",
    components: {
        GoogleIcon

  },
    data (){
      return{
      }
    },
    methods:{
        loginWithGoogle(){

        }


    }

}

</script>

<style lang="scss">

:root {
	--color-white: #ffffff;
	--color-light: #f1f5f9;
	--color-black: #121212;
	--color-night: #001632;

	--color-red: #f44336;
	--color-blue: #1a73e8;
	--color-gray: #80868b;
	--color-grayish: #dadce0;

	--shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
		0 1px 2px 0 rgba(0, 0, 0, 0.06);
	--shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	--shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);

}

html {
	font-size: 100%;
	font-size-adjust: 100%;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

*,
*::before,
*::after {
	padding: 0;
	margin: 0;
	box-sizing: inherit;
	list-style: none;
	list-style-type: none;
	text-decoration: none;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeLegibility
}

body {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 1rem;
	font-weight: normal;
	line-height: 1.5;
	color: var(--color-black);
	background: var(--color-light);
}

a,
button {
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	border: none;
	outline: none;
	background: none;
	text-decoration: none;
}

img {
	display: block;
	width: 100%;
	height: auto;
	object-fit: cover;
}


.container {
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 80rem;
	min-height: 100vh;
	width: 100%;
	padding: 0 2rem;
	margin: 0 auto;

}

.text {
	font-family: inherit;
	line-height: inherit;
	text-transform: unset;
	text-rendering: optimizeLegibility;

	&-large {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-black);
	}

	&-normal {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-black);
	}

	&-links {
		font-size: 1rem;
		font-weight: 400;
		color: var(--color-blue);

		&:hover {
			text-decoration: underline;
		}
	}
}


.main {
	.wrapper {
		max-width: 28rem;
		width: 100%;
		margin: 2rem auto;
		padding: 2rem 2.5rem;
		border: none;
		outline: none;
		border-radius: 0.25rem;
		color: var(--color-black);
		background: var(--color-white);
		box-shadow: var(--shadow-large);

		.form {
			width: 100%;
			height: auto;
			margin-top: 2rem;

			.input-control {
				display: flex;
				align-items: center;
				justify-content: space-between;
			
			}

			.input-field {
				font-family: inherit;
				font-size: 1rem;
				font-weight: 400;
				line-height: inherit;
				width: 100%;
				height: auto;
				padding: 0.75rem 1.25rem;
				border: none;
				outline: none;
				border-radius: 2rem;
				color: var(--color-black);
				background: var(--color-light);
				text-transform: unset;
				text-rendering: optimizeLegibility;
			}

			.input-submit {
				font-family: inherit;
				font-size: 1rem;
				font-weight: 500;
				line-height: inherit;
				cursor: pointer;
				min-width: 40%;
				height: auto;
				padding: 0.65rem 1.25rem;
				border: none;
				outline: none;
				border-radius: 2rem;
				color: var(--color-white);
				background: var(--color-blue);
				box-shadow: var(--shadow-medium);
				text-transform: capitalize;
				text-rendering: optimizeLegibility;
			}
		}

		.striped {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin: 1rem 0;

			&-line {
				flex: auto;
				flex-basis: auto;
				border: none;
				outline: none;
				height: 2px;
				background: var(--color-grayish);
			}

			&-text {
				font-family: inherit;
				font-size: 1rem;
				font-weight: 500;
				line-height: inherit;
				color: var(--color-black);
				margin: 0 1rem;
			}
		}

		.method {
			&-control {
				margin-bottom: 1rem;
			}

			&-action {
				font-family: inherit;
				font-size: 0.95rem;
				font-weight: 500;
				line-height: inherit;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: auto;
				padding: 0.35rem 1.25rem;
				outline: none;
				border: 2px solid var(--color-grayish);
				border-radius: 2rem;
				color: var(--color-black);
				background: var(--color-white);
				text-transform: capitalize;
				text-rendering: optimizeLegibility;
				transition: all 0.35s ease;

				&:hover {
					background: var(--color-light);
				}
			}
		}
	}
}

</style>
