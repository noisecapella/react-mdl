import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import mdlUpgrade from './utils/mdlUpgrade';

class IconToggle extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        ripple: PropTypes.bool
    }
    render() {
        const { className, name, ripple, ...inputProps } = this.props;

        const classes = classNames('mdl-icon-toggle mdl-js-icon-toggle', {
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <label className={classes}>
                <input
                    type="checkbox"
                    className="mdl-icon-toggle__input"
                    { ...inputProps }
                />
                <Icon className="mdl-icon-toggle__label" name={name} />
            </label>
        );
    }
}

export default mdlUpgrade(IconToggle);
