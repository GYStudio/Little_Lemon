const navigation = new Map();
navigation.set('home', { name: 'Home', path: '/', anchorable: true });
navigation.set('about', { name: 'About', path: '/about', anchorable: true });
navigation.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
navigation.set('reservations', { name: 'Reservations', path: '/reservations', anchorable: true });
navigation.set('confirmedBooking', { name: 'Confirmed Booking', path: '/confirmed-booking', anchorable: false });
navigation.set('orders', { name: 'Order Online', path: '/orders', anchorable: true });
navigation.set('login', { name: 'Login', path: '/login', anchorable: true });

export default navigation;