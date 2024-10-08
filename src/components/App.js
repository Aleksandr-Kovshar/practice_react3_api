import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { MaterialEditorForm } from "./MaterialEditorForm/MaterialEditorForm";
import { MaterialList } from "./MaterialList/MaterialList";
import * as API from "../services/api";

class App extends Component {
  state = { materials: [], isLoading: false, error: false };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }

  addMAterials = async (values) => {
    try {
      const material = await API.addMaterial(values);
      this.setState((state) => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };

  deleteMaterial = async (id) => {
    try {
      await API.deleteMaterial(id);
      this.setState((state) => ({
        materials: state.materials.filter((material) => material.id !== id),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async (fields) => {
    try {
      const updatedMaterial = await API.updateMaterial(fields);
      this.setState((state) => ({
        materials: state.materials.map((material) =>
          material.id === fields.id ? updatedMaterial : material
        ),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        {error && <p>Ой, ошибка</p>}
        <MaterialEditorForm
          onSubmit={this.addMAterials}
          isSubmitting={isLoading}
        />

        {isLoading ? (
          <div>LOADING</div>
        ) : (
          <MaterialList items={materials} onDelete={this.deleteMaterial} onUpdate={this.updateMaterial}/>
        )}
      </Layout>
    );
  }
}

export default App;
