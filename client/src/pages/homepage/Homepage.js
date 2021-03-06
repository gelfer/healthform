import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FormItem from "../../components/formItem/FormItem";
import { getForms } from "../../actions/forms";
import { SearchBox } from "../../components/searchBox/SearchBox";

const Home = ({
  getForms,
  auth: { isAuthenticated, loading },
  form: { forms }
}) => {
  useEffect(() => {
    getForms();
  }, [getForms]);

  const [formData, setFormData] = useState({
    searchField: ""
  });

  const filteredLastName = forms.filter(form =>
    form.lastName.toLowerCase().includes(formData.searchField.toLowerCase())
  );

  const handleChange = e => {
    setFormData({ searchField: e.target.value });
  };

  return (
    <Fragment>
      {!loading && (
        <Fragment>
          {isAuthenticated ? (
            <Fragment>
              <div>
                <div className="dash-buttons">
                  <Link to="/create" className="btn btn-light">
                    Add a new form{" "}
                  </Link>
                </div>
                <SearchBox
                  placeholder="search by last name"
                  className="container"
                  handleChange={handleChange}
                ></SearchBox>

                <h2 className="my-1">
                  Total number of forms: {filteredLastName.length}
                </h2>

                <div>
                  {filteredLastName.length > 0 ? (
                    filteredLastName.map(form => (
                      <FormItem key={form._id} form={form}></FormItem>
                    ))
                  ) : (
                    <h4>Empty...</h4>
                  )}
                </div>
              </div>
            </Fragment>
          ) : (
            <h1>Please sign in</h1>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Home.propTypes = {
  getForms: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  form: state.form
});

export default connect(mapStateToProps, { getForms })(Home);
