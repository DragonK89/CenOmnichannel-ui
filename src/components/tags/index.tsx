import React from "react";
import styled from "styled-components";
import styledTS from "styled-components-ts";
import dimensions from "../helpers/dimensions";
import colors from "../colors";
import Label from "../label";

export interface ITag {
  _id: string;
  type: string;
  name: string;
  colorCode: string;
  objectCount?: number;
}

const TagList = styledTS<{ length: number }>(styled.div).attrs({
  className: (props) => (props.length > 0 ? "tags" : ""),
})`
  > span {
    margin-right: ${dimensions.unitSpacing / 2}px;

    &:last-child {
      margin: 0;
    }
  }
`;

type Props = {
  tags: ITag[];
  size?: string;
  limit?: number;
};

function Tags({ tags, limit }: Props) {
  const length = tags.length;

  return (
    <TagList length={length}>
      {tags.slice(0, limit ? limit : length).map((tag) => {
        return (
          <Label key={tag.name} lblColor={tag.colorCode} ignoreTrans={true}>
            <span>{tag.name}</span>
          </Label>
        );
      })}
      {limit && length - limit > 0 && (
        <Label lblColor={colors.colorCoreGray} ignoreTrans={true}>
          <span>{`+${length - limit}`}</span>
        </Label>
      )}
    </TagList>
  );
}

export default Tags;
