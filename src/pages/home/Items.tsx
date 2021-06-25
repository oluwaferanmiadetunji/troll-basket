import { memo } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';
import Products from 'data.json';

const Row = memo(({ data, index, style }: any) => {
	const { items } = data;
	console.log({ items, index });
	const item = items[index];

	return (
		<div style={style}>
			{item.label} is {item.isActive ? 'active' : 'inactive'}
		</div>
	);
}, areEqual);

const createItemData = memoize((items) => ({
	items,
}));

function Example({ height, items, width }: any) {
	const itemData = createItemData(items);

	return (
		<List height={height} itemCount={items.length} itemData={itemData} itemSize={35} width={width}>
			{Row}
		</List>
	);
}

const ExampleWrapper = () => {
	return <Example height={150} items={Products} width={300} />;
};

export default ExampleWrapper;
