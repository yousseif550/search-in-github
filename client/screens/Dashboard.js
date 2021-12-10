import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, StyleSheet, ImageBackground  } from 'react-native';

export default function Dashboard(navigation) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const {user_name} = navigation.route.params
  
  console.log('USER', user_name)

  const fetchUser = async (user) => {
    const response = await fetch(`http://6838-46-193-4-136.ngrok.io/api/users/${user}`)
    const data = await response.json();
    console.log('DATA CLIENT', data)
  }
  fetchUser(user_name)
  useEffect(() => {
    fetch(`http://6838-46-193-4-136.ngrok.io/api/users/${user_name}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
        {data.message ? <Text style={styles.text}> UTILISATEUR INTROUVALE</Text> : 
        ( <View>
            {user_name ? (
                  <View >
                      <Text style={styles.text}>{data.query.login}</Text>
                      <br></br>
                      <Image
                        style={styles.tinyLogo}
                        source={{
                          uri: `${data.query.avatar_url}`,
                        }}
                      />
                      <br></br>
                      <Text style={styles.text}>{data.query.name}</Text>
                      <br></br>
                      <Text style={styles.text}>{data.query.bio}</Text>
                      
                      <br></br>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}> Followers <br></br>
                        {data.query.followers == null  ? (<Text style={styles.text}> 0</Text> ): ( <Text style={styles.text}>{ data.query.followers}</Text>  )}
                        </Text>  
                        <Text style={styles.text}> Following  <br></br>
                        {data.query.following == null  ? (<Text style={styles.text}> 0</Text> ): ( <Text style={styles.text}>{ data.query.following}</Text>  )}
                        </Text> 
                         

                        <Text style={styles.text}> Public Repositories   <br></br>
                        {data.query.public_repos == null  ? (<Text style={styles.text}> 0</Text> ): ( <Text style={styles.text}>{ data.query.public_repos}</Text>  )}
                        </Text>  
                      </View>
                    
                  </View>
              
              ) : (
                <Text>Veuillez entrer un nom d'utilisateur valide </Text>
              )}
          </View>
          
        )}
            
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A8C8DC"
  },
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#A8C8DC"
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  },
  tinyLogo: {
    borderRadius: 40,
    width: 100,
    height: 100,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
  }, 
  image: {
    flex: 1,
    justifyContent: "center"
  },
});