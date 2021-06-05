import React, { lazy, Suspense } from 'react';
import 'fontsource-roboto';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { CircularProgress } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppliedTheme from './styles/theme.styles';
import useStyle from './App.styles';
import GlobalStyles from './styles/Global.styles';

import NavBar from './components/navBar';
import Error from './pages/404';
import Footer from './components/footer';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contact = lazy(() => import('./pages/contact'));

function App() {
	const classes = useStyle();

	const appliedTheme = createMuiTheme({
		palette: {
			...AppliedTheme.mypalette,
			type: 'light',
		},
	});

	return (
		<Router>
			<Provider store={store}>
				<ThemeProvider theme={appliedTheme}>
					<CssBaseline />
					<GlobalStyles />
					<NavBar />
					<main className={classes.App}>
						<Suspense
							fallback={
								<div className={classes.suspense}>
									<CircularProgress />
								</div>
							}
						>
							<Switch>
								<Route path='/' exact component={Home} />
								<Route path='/about' component={About} />
								<Route path='/contact' component={Contact} />
								<Route component={Error} />
							</Switch>
						</Suspense>
						<Footer />
					</main>
				</ThemeProvider>
			</Provider>
		</Router>
	);
}

export default App;
