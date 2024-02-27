import React, {ChangeEventHandler, ComponentPropsWithoutRef, FC, useState} from 'react';
import styled from "styled-components";

const theme = {
	fontSize: {
		default: '16px',
		small: '14px',
		large: '18px',
	},
	color: {
		white: '#fff',
		black: '#000'
	}
}

type Theme = typeof theme;
export type FontSize = keyof Theme['fontSize'];
export type Color = keyof Theme['color'];

type ReactSelectProps = ComponentPropsWithoutRef<'select'>;

// interface SelectProps<OptionT extends Record<string, string>> extends Pick<ReactSelectProps, 'id'| 'key'>  {
interface SelectProps<OptionT extends Record<string, string>> extends Partial<SelectStyleProps>  {
	id?: ReactSelectProps['id'];
	className?: ReactSelectProps['className'];

	options: OptionT;
	selectedOption? : keyof OptionT;
	onChange?: (selected?: keyof OptionT) => void;
}

const Select = <OptionT extends Record<string, string>>({
	id,
	className,
	options,
	selectedOption,
	onChange,
	fontSize = 'default',
	color = 'black'
}: SelectProps<OptionT>) => {
	const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
		const selected = Object.entries(options)
			.find(([_, value]) => value === e.target.value)?.[0];
		onChange?.(selected);
	}
	return (
		<StyledSelect
			id={id}
			className={className}
			fontSize={fontSize}
			color={color}
			onChange={handleChange}
			value={selectedOption && options[selectedOption]}
		>
			{Object.entries(options).map(([key, value]) => (
				<option key={key} value={value}>
					{value}
				</option>
			))}

		</StyledSelect>
	);
};


interface SelectStyleProps {
	color: Color;
	fontSize: FontSize;
}

const StyledSelect = styled.select<SelectStyleProps>`
	color: ${({ color }) => theme.color[color]};
	font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
`;

const fruits = {
	apple: '사과',
	banana: '바나나',
	blueberry: '블루베리',
}

type Fruit = keyof typeof fruits;

const FruitSelect: FC = () => {
	const [fruit, changeFruit] = useState<Fruit | undefined>('apple');
	return (
		<Select onChange={changeFruit} options={fruits} selectedOption={fruit} />
	)
}

export default FruitSelect;