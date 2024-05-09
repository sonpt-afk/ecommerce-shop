import React, { MouseEvent, ChangeEvent, KeyboardEvent } from 'react';
import { Input } from 'antd';
const { Search: AntdSearch } = Input;

const onSearch = (value: string, event?: MouseEvent<HTMLElement, MouseEvent> | ChangeEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>, info?: { source?: string }) => console.log(info?.source, value);

const SearchComponent: React.FC = () => {
  return (
    <div>
      <AntdSearch
        placeholder="input search text"
        allowClear
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
};

export default SearchComponent;
