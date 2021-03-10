import React from 'react';
import ValueButtonContainer from './ValueButtonContainer';
import { valueArray } from '../../data';

const ValueButtons = ({ onPress }) => {
	return (
		<ValueButtonContainer>
			{valueArray.map((item, i) => (
				<ValueSingleButtonBox key={i}>
					<div
						style={{
							display: 'inline',
							flex: 1,
							marginRight: 20,
						}}>
						<p
							style={{
								margin: 0,
								padding: 0,
								textAlign: 'end',
								fontSize: 20,
								fontWeight: '600',
							}}>
							{item.title}
						</p>
					</div>

					<div className='button-value' onClick={() => onPress(i)}>
						<p style={{ margin: 0, padding: 0 }}>{i + 1}</p>
					</div>
				</ValueSingleButtonBox>
			))}
		</ValueButtonContainer>
	);
};

const ValueSingleButtonBox = ({ children }) => {
	return <div className='value-single-button'>{children}</div>;
};

export default ValueButtons;
