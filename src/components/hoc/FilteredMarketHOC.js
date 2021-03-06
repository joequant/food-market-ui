import { connect } from 'react-redux';
import MarketHOC from './MarketHOC';
import { fetchToken } from '../../redux/actions/TokenAction';
import { getAllOffers, getAllRequirements, gotoMarket } from '../../redux/actions/MarketAction';
import { fetchUsername } from '../../redux/actions/ProfileAction';

const mapStateToProps = (state) => ({
  offers: state.market.offers,
  categories: ['All', ...state.categories],
  requirements: ['All', ...state.market.requirements],
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffers: (address) => {
    dispatch(getAllOffers(address));
    dispatch(getAllRequirements(address));
    dispatch(fetchUsername(address));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketHOC);
