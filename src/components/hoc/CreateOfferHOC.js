import { connect } from 'react-redux';
import CreateOfferPage from '../stateless/specific/pages/CreateOfferPage/CreateOfferPage';
import { createOffer } from '../../redux/actions/OfferAction.js';
import { fetchAttributesFromQualityName } from '../../redux/actions/AttributesAction';
import { resetSelectedOffer } from '../../redux/actions/OfferAction';

function attributesToValueField(attributes) {
  return attributes.map(attribute => {
    const min = attribute.min.toFixed(attribute.decimals);
    const max = attribute.max.toFixed(attribute.decimals);
    return {
      field: attribute.id,
      value: `${min} – ${max}`,
    };
  });
}

const mapStateToProps = (state) => ({
  address: state.market.address,
  categories: state.categories,
  requirements: state.market.requirements,
  qualities: state.market.qualities,
  attributesValueField: attributesToValueField(state.requirementsAttributes),
  devices: state.market.devices,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: (offer, image, marketAddress, devices) => {
    dispatch(createOffer(offer, image, marketAddress, devices, ownProps.history));
  },

  fetchAttributes: (requirementsName, marketAddress) => {
    dispatch(fetchAttributesFromQualityName(requirementsName, marketAddress));
  },

  reset: () => {
    dispatch(resetSelectedOffer());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateOfferPage);
