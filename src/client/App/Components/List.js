import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import classNames from 'classnames';
import { Link } from "react-router-dom";

class List extends Component {
	static propTypes = {
        list : PropTypes.arrayOf(
            PropTypes.shape({
                _id : PropTypes.string,
                data: PropTypes.objectOf(
					PropTypes.shape({
						author: PropTypes.string,
						description: PropTypes.string,
						thumbnail: PropTypes.string,
						name: PropTypes.string
					})
				)
            })
        )
    };

    static defaultProps = {
        list: []
    };  


	_renderList(list) {
		return (
			<div>
				<ul className="row title">
					<li className="col-md-3">Manga</li>
					<li className="col-md-6">Description</li>
					<li className="col-md-3">Author</li>
				</ul>
				<div className="table">
					<ul>
						{
							list.map((item, index) => {
								const isEven = (index % 2) === 0 ? true : false;
								const className = classNames({
									row: true,
									'row-even': isEven
								});
								const {
									_id = '',
									data: {
										author = '',
										description = '',
										name = '',
										thumbnail = ''
									} = {}
								} = item;
								
								return (
									<li key={index} className={className}>
										<Link className="item" to={{
											pathname: `/post/${_id}`,
											state: {
												post: item
											}
										}} >
											<div className="col-md-3">
												<img className="row-thumbnail" src={thumbnail}></img>
												<div className="row-name">{name}</div>
											</div>
											<span className="col-md-6 row-description"><div dangerouslySetInnerHTML={{ __html: description }}></div></span>
											<span className="col-md-3 row-author">{author}</span>
										</Link>

									</li>
								);
							})
						}
					</ul>

				</div>
			</div>
		)
	}

	render() {
		const { list } = this.props;
		return (
			<div className="List">
				{list.length ? this._renderList(list) : (
					<div>
						<p>Click plus button to create content</p>
					</div>
				)
				}
			</div>
		);
	}
}

export default List;
